import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  const deployment = await deploy('LFG', {
    from: deployer,
    args: [],
  });

  deployments.log(`Contract ${'LFG'} deployed at ${deployment.address}`);
};

export default func;

func.tags = ['LFG'];
