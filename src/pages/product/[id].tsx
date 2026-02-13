import { useRouter } from "next/router"
const DetailProductPage = () => {
    const router = useRouter()
    // console.log(router.query)
    return (
      <>
            <h1>Detail Product</h1>
            
            <p>Nama Produk : { router.query.id }</p>
      </>
      
      
  )
}

export default DetailProductPage