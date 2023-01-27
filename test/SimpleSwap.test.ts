const { expect } = require('chai');
const { ethers } = require('hardhat');

const WETH_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
const DAI_ADDRESS = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const USDC_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const DAI_DECIMALS = 18;
const USDC_DECIMALS = 6;
const SwapRouterAddress = '0xE592427A0AEce92De3Edee1F18E0157C05861564';
const NonfungiblePositionManagerAddress = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88';

const ercAbi = [
	// Read-Only Functions
	'function balanceOf(address owner) view returns (uint256)',
	// Authenticated Functions
	'function transfer(address to, uint amount) returns (bool)',
	'function deposit() public payable',
	'function approve(address spender, uint256 amount) returns (bool)',
];

// npx hardhat test --network localhost
// npx hardhat node --fork https://rpc.ankr.com/eth

// 이더 -> 랩드 이더 -> DAI 스왑
describe('SimpleSwap', function () {
	it('Should provide a caller with more DAI than they started with after a swap', async function () {
		/* Deploy the SimpleSwap contract */
		const simpleSwapFactory = await ethers.getContractFactory('SimpleSwap');
		const simpleSwap = await simpleSwapFactory.deploy(SwapRouterAddress);
		await simpleSwap.deployed();
		const signers = await ethers.getSigners();

		/* Connect to WETH and wrap some eth  */
		const WETH = new ethers.Contract(WETH_ADDRESS, ercAbi, signers[0]);
		const deposit = await WETH.deposit({ value: ethers.utils.parseEther('1') });
		await deposit.wait();

		/* Check Initial DAI Balance */
		const DAI = new ethers.Contract(DAI_ADDRESS, ercAbi, signers[0]);
		const expandedDAIBalanceBefore = await DAI.balanceOf(signers[0].address);
		const DAIBalanceBefore = Number(
			ethers.utils.formatUnits(expandedDAIBalanceBefore, DAI_DECIMALS),
		);

		/* Approve the swapper contract to spend WETH for me */
		await WETH.approve(simpleSwap.address, ethers.utils.parseEther('1'));

		/* Execute the swap */
		const amountIn = ethers.utils.parseEther('1');
		const swap = await simpleSwap.swapWETHForDAI(amountIn, { gasLimit: 300000 });
		swap.wait();

		/* Check DAI end balance */
		const expandedDAIBalanceAfter = await DAI.balanceOf(signers[0].address);
		const DAIBalanceAfter = Number(
			ethers.utils.formatUnits(expandedDAIBalanceAfter, DAI_DECIMALS),
		);

		console.log('DAI Balance Before: ', DAIBalanceBefore);
		console.log('DAI Balance After: ', DAIBalanceAfter);

		expect(DAIBalanceAfter).is.greaterThan(DAIBalanceBefore);
	});
	it('Should provide a caller with more USDC than they started with after a swap', async function () {
		/* Deploy the SimpleSwap contract */
		const simpleSwapFactory = await ethers.getContractFactory('UsdcSwap');
		const simpleSwap = await simpleSwapFactory.deploy(SwapRouterAddress);
		await simpleSwap.deployed();
		const signers = await ethers.getSigners();

		/* Connect to WETH and wrap some eth  */
		const WETH = new ethers.Contract(WETH_ADDRESS, ercAbi, signers[0]);
		const deposit = await WETH.deposit({ value: ethers.utils.parseEther('1') });
		await deposit.wait();

		/* Check Initial USDC Balance */
		const USDC = new ethers.Contract(USDC_ADDRESS, ercAbi, signers[0]);
		const expandedUsdcBalanceBefore = await USDC.balanceOf(signers[0].address);
		const UsdcBalanceBefore = Number(
			ethers.utils.formatUnits(expandedUsdcBalanceBefore, USDC_DECIMALS),
		);

		/* Approve the swapper contract to spend WETH for me */
		await WETH.approve(simpleSwap.address, ethers.utils.parseEther('1'));

		/* Execute the swap */
		const amountIn = ethers.utils.parseEther('1');
		const swap = await simpleSwap.swapWETHForDAI(amountIn, { gasLimit: 300000 });
		swap.wait();

		/* Check USDC end balance */
		const expandedUsdcBalanceAfter = await USDC.balanceOf(signers[0].address);
		const UsdcBalanceAfter = Number(
			ethers.utils.formatUnits(expandedUsdcBalanceAfter, USDC_DECIMALS),
		);

		console.log('UsdcBalanceBefore: ', UsdcBalanceBefore);
		console.log('UsdcBalanceBefore: ', UsdcBalanceAfter);

		expect(UsdcBalanceAfter).is.greaterThan(UsdcBalanceBefore);
	});

	it.skip('swap and pooling', async function () {
		/* Deploy the SimpleSwap contract */
		const LiquidityExampleFactory = await ethers.getContractFactory('LiquidityExamples');
		const liquidityExample = await LiquidityExampleFactory.deploy(
			NonfungiblePositionManagerAddress,
			{ gasLimit: 890000 },
		).catch(console.debug);
		const signers = await ethers.getSigners();
		const DAI = new ethers.Contract(DAI_ADDRESS, ercAbi, signers[0]);
		const USDC = new ethers.Contract(USDC_ADDRESS, ercAbi, signers[0]);

		await liquidityExample.deployed();

		// approve
		await liquidityExample.mintNewPosition({ gasLimit: 500000 });

		const expandedDAIBalanceAfter = await DAI.balanceOf(signers[0].address);
		const DAIBalanceAfter = Number(
			ethers.utils.formatUnits(expandedDAIBalanceAfter, DAI_DECIMALS),
		);
		console.log(DAIBalanceAfter);
	});
});
