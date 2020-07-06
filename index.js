'use strict'
const axios = require('axios').default;
const qs = require('qs')
const axiosCookieSuport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');

axiosCookieSuport(axios);
const cookieJar = new tough.CookieJar();
let apiCookie = { withCredentials: true, jar: cookieJar };

let api = axios.create({
    baseURL: 'https://www.bet365.com/',
    headers: {
        'Accept': '*/*',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Length': 178,
        'Content-type': 'application/x-www-form-urlencoded',
        'Host': 'members.bet365.com',
        'Origin': 'https://www.bet365.com',
        'Pragma': 'no-cache',
        'Referer': 'https://www.bet365.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
    }

})



//console.log(apiCookie)

class inplay {
    getInplay(lid, zid, cid, ctid) {
        return new Promise((resolve, reject) => {

            //console.log(apiCookie)
            //console.log(`SportsBook.API/web?lid=${lid}&zid=${zid}&pd=${pd}&cid=${cid}&ctid=${ctid}`)
            // let query = qs.stringify({
            //     lid: lid,
            //     zid: zid,
            //     cid: cid,
            //     ctid: ctid
            // })

            // api.get('defaultapi/sports-configuration/', apiCookie).then((config) => {
            //    config = config.data
            //    console.log(config)
            api.get(`SportsBook.API/web?lid=${lid}&zid=${zid}&pd=%23AC%23B1%23C1%23D13%23F2%23Q1%23F%5E12%23&cid=${cid}&ctid=${ctid}`, apiCookie).then((game) => {
                game = game.data
                var arr = game.split('|'), restData = [], pullData = [], val
                for (val of arr) {
                    var go = val.indexOf('PA')
                    if (go == 0) {
                        //console.log(val)
                        let xna = val.indexOf('NA')
                        let xn2 = val.indexOf('N2')
                        let xpd = val.indexOf('PD')
                        let xBC = val.indexOf('BC')
                        let xPT = val.indexOf('PT')
                        let zID = val.indexOf('ID')
                        let zFI = val.indexOf('FI')
                        let zFD = val.indexOf('FD')
                        let zLI = val.indexOf('LI')
                        let zEX = val.indexOf('EX')
                        let zSU = val.indexOf('SU')
                        let xML = val.indexOf('ML')
                        let xEM = val.indexOf('EM')
                        // let xFF = val.indexOf('FF')
                        // let xMT = val.indexOf('MT')
                        // let zOR = val.indexOf('OR')
                        // let xFS = val.indexOf('FS')
                        // let xCL = val.indexOf('CL')
                        // let xCC = val.indexOf('CC')
                        // let xTR = val.indexOf('TR')
                        // let xCB = val.indexOf('CB')
                        // let zNA = val.indexOf('NA')
                        // let xKI = val.indexOf('KI')
                        // let xKC = val.indexOf('KC')
                        //let xPD = val.indexOf('PD')
                       // console.log(xn2)
                        if(zID == 3 && xna == 18 && xn2 !== -1 && xpd !== -1 && zFD !== -1 && xML !== -1 && zLI !== -1 && zEX !== -1 && zSU !== -1 && zFD !== -1 && zFI !== -1){
                            
                            let info = val.substring(xna + 3, xn2 - 1)
                            let pdata = val.substring(xpd + 3, xML - 1)
                            let xn2Data = val.substring(xn2 + 3, zFD - 1)
                            let fdData = val.substring(zFD + 3, zFI - 1)
                            let bcData = val.substring(xBC + 3, zLI - 1)
                            let liData = val.substring(zLI + 3, zEX - 1)
                            let ptData = val.substring(xPT + 3, xEM - 1)
                            let suData = val.substring(zSU + 3, xpd - 1)
                            let mlData = val.substring(xML + 3, xPT - 1)          
                            let ID = val.substring(zID + 3, xna - 1)
                            let FI = val.substring(zFI + 3, xBC - 1)
                
                            // let exData = val.substring(zEX + 3,  zSU - 1)
                            // let fsData = val.substring(xFS + 3, xPT - 1) 
                            // let cbDAta = val.substring(xCB + 3, zNA - 1)
                            // let naData = val.substring(zNA + 3, xKI - 1)
                            // let kiData = val.substring(xKI + 3, xKC - 1)
                            // let pdData = val.substring(xpd + 3, xML - 1)
                            // let ccData = val.substring(xCC + 3, xTR - 1)
                            // let clData = val.substring(xCL + 3, xCC - 1)
                    
                            let setObj = {
                                info: info,
                                pdata: pdata,
                                bcData: bcData,
                                ptData: ptData,
                                fdData: fdData,
                                //naData: naData,
                                //kiData: kiData,
                                //exData: exData,
                                suData: suData,
                                mlData: mlData,
                                n2: xn2Data,
                                li: liData,
                                id: ID,
                                fi: FI
                            }
                    
                            restData.push(setObj)
                    
                        }
                        // let info = val.substring(xna + 3, xn2 - 1)
                        // let pdata = val.substring(xpd + 3, xFF - 1)
                        // let bcData = val.substring(xBC + 3, xFS - 1)
                        // let fsData = val.substring(xFS + 3, xPT - 1)
                        // let ptData = val.substring(xPT + 3, xMT - 1)
                        // let clData = val.substring(xCL + 3, xCC - 1)
                        // let ccData = val.substring(xCC + 3, xTR - 1)
                        // let cbDAta = val.substring(xCB + 3, zNA - 1)
                        // let naData = val.substring(zNA + 3, xKI - 1)
                        // let kiData = val.substring(xKI + 3, xKC - 1)
                        // let ID = val.substring(zID + 3, zOR - 1)
                        // let FI = val.substring(zFI + 3, zNA - 1)
                    }
                }

                return resolve(restData)
            }).catch((err) => {
                return reject(err)
            })
            //})
        })
    }
}

module.exports = inplay;