import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { VStack, Text, HStack, Wrap, Box, Flex, Square, Center, Image, Container, Button, WarningIcon, CheckCircleIcon } from "@chakra-ui/react";
import { toHex, truncateAddress } from './utils'
import Footer from './footer';
import { Stack } from 'react-bootstrap';



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
    const moovpage = () => {
        router.push('./sellnft/polygonplace')
    }

    const refreshState = () => {
        setAccount("");
        setChainId("");
        setProvider();
    };
    return (
        <>
            <Flex color='blackAlpha'>

                <Box w='70vh' h={'100vh'} bg='yellow.400'>
                    <Image src='walletimg4.png' w='70vh' h={'100vh'} />


                </Box>
                <Box flex='1' >

                    <Text fontSize={'7xl'} align={'center'}
                        fontWeight={'extrabold'}
                    >
                        Connect Wallet
                    </Text>
                    <Text color={'blackAlpha.500'} fontSize={50} align={'center'}>
                        Connectez vous a votre portefeuille afin de faire vos achats
                    </Text>

                    <Stack direction='row' align='center'>
                        {!account ? (
                            <Button onClick={connectWallets} colorScheme={'teal'} size='md' height='48px'
                                width='200px'
                                border='2px'
                                borderColor='yellow.500'
                                rounded={'full'}
                                fontWeight={'bold'}
                                _hover={{ bg: "", color: "yellow.400" }}
                                mt={'16'}
                            >
                                connect
                            </Button>
                        ) : (
                            <Button onClick={moovpage}>test</Button>
                        )}

                    </Stack>
                </Box>

            </Flex>

        </>
    )
}



