//@ts-ignore
export function corsHandler(req, res, next) {   
    res.header('Access-Control-Allow-Origin', '*');
}
