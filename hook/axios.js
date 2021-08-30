export default (options)=>{
	return new Promise((res,rej)=>{
		res(uni.request(options))
	})
}