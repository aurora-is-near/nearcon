import { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
import type { IBeaconUpgradeable, IBeaconUpgradeableInterface } from "../IBeaconUpgradeable";
export declare class IBeaconUpgradeable__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IBeaconUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBeaconUpgradeable;
}
