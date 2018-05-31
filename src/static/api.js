let baseURL
//let imgUrl = ''
if(process.env.NODE_ENV === 'development'){
	baseURL = 'http://localhost:3000'
}else{
	baseURL = 'http://localhost:3000'
}

export default baseURL