import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { VStack, Text, HStack, Wrap, Box, Flex, Square, Center, Image, Container, Button, WarningIcon, CheckCircleIcon } from "@chakra-ui/react";
import { toHex, truncateAddress } from './utils'


const INFURA_ID = "cac1807c01c04b07a1188c772d768bdf"

const MAINNET_RPC_URL = `https://mainnet.infura.io/v3/${INFURA_ID}`;
const ROPSTEN_RPC_URL = `https://ropsten.infura.io/v3/${INFURA_ID}`;
const RINKEBY_RPC_URL = `https://rinkeby.infura.io/v3/${INFURA_ID}`;


const injected = injectedModule()

const onboard = Onboard({
    wallets: [injected],
    chains: [
        {
            id: '0x1',  // chain ID must be in hexadecimel
            token: 'ETH',  // main chain token
            label: 'Ethereum Mainnet',
            rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`  // rpcURL required for wallet balances
        },
        {
            id: '0x3',
            token: 'tROP',
            label: 'Ethereum Ropsten Testnet',
            rpcUrl: `https://ropsten.infura.io/v3/${INFURA_ID}`
        },
        {
            id: '0x4',
            token: 'rETH',
            label: 'Ethereum Rinkeby Testnet',
            rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`
        },
        {
            id: '0x38',
            token: 'BNB',
            label: 'Binance Smart Chain',
            rpcUrl: 'https://bsc-dataseed.binance.org/'
        },
        {
            id: '0x137',
            token: 'MATIC',
            label: 'Matic Mainnet',
            rpcUrl: 'https://polygon-rpc.com/'
        }

    ]

});


export default function walletconnect() {

    const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
    const router = useRouter();
    const [_, setProvider] = useState();
    const [account, setAccount] = useState();
    const [error, setError] = useState("");
    const [chainId, setChainId] = useState();
    const [network, setNetwork] = useState();
    const [isLoading, setIsLoading] = useState(false);

    async function connectWallets() {
        try {
            const wallets = await onboard.connectWallet();
            setIsLoading(true);
            const { accounts, chains, provider } = wallets[0];
            setAccount(accounts[0].address);
            setChainId(chains[0].id);
            setProvider(provider);
            setIsLoading(false);

        } catch (error) {
            setError(error);
        }
    };
    const switchNetwork = async () => {
        await onboard.setChain({ chainId: toHex(network) });
    };

    const handleNetwork = (e) => {
        const id = e.target.value;
        setNetwork(Number(id));
    };
    const handleItemForm = async () => {

        const [ids] = await onboard.state.get().wallets;
        if (!ids[0] == '0x1') {
            return router.push('/create-item/create-polygon-item')
        } else return router.push('/')


    };

    const disconnect = async () => {
        const [primaryWallet] = await onboard.state.get().wallets;
        if (!primaryWallet) return;
        await onboard.disconnectWallet({ label: primaryWallet.label });

        refreshState();


    };

    const refreshState = () => {
        setAccount("");
        setChainId("");
        setProvider();
    };
    return (
        <>
            <Flex color='blackAlpha'>

                <Box w='100vh' h='100vh' bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
                    <Image src='ethereum.png'>

                    </Image>
                </Box>
                <Box flex='1' >

                    <Text fontSize={100} justify='ceneter' ml='80px'>Connect Wallet</Text>
                    <Text ml='80px' color={'blackAlpha.500'} fontSize={50}>Choose how you want to connect</Text>

                    <Center>
                        {!account ? (
                            <Button onClick={connectWallets} colorScheme='teal' size='lg' height='48px' alignSelf={'ceneter'}
                                width='200px'
                                border='2px'
                                borderColor='green.500'
                                mt={50}
                            >
                                connect
                            </Button>
                        ) : (
                            <Button onClick={disconnect}>Disconnect</Button>
                        )}

                    </Center>
                </Box>
            </Flex>
        </>
    )
}



