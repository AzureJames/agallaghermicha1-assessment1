export default function Uuid( {user}, {uuid} ) { //{uuid}   don't export default??

  const { 
    favoriteColor,
    createdAt,
    name,
    avatar,
    id
   } = user

    const container = {
        maxWidth: '1000px',
    margin: '0 auto'    }

    return ( 
        <div style={container}>
            <h1>Developer Profile {uuid}</h1>
            <p>{favoriteColor}</p>
            <p>{id}</p>
            <p></p>
            <p></p>
        </div>
    )}




    export async function getStaticPaths() {
      return {
        paths: [{ params: { uuid: '1' } }, 
        { params: { uuid: '2' } },
        { params: { uuid: '3' } },
        { params: { uuid: '4' } },
        { params: { uuid: '5' } },
        { params: { uuid: '6' } },
        { params: { uuid: '0' } },
        ],
        fallback: false, // can also be true or 'blocking'
      }
    }







    export async function getStaticProps(context) {
        // Call an external API endpoint to get posts.
        // You can use any data fetching library
        let res;
        let data;
        res = await fetch('https://63938671ab513e12c510ef40.mockapi.io/devs') 
        let user = await res.json()
        //let user = data.find(item=> item.id-1 == params.uuid)
        return {
          props: {
            user,
          },
        }
      }
      

    //   export async function getStaticPaths(context) {  
    //     // Call an external API endpoint to get posts.
    //     // You can use any data fetching library
        
    //     let res;
    //     let data;
    //     res = await fetch('https://63938671ab513e12c510ef40.mockapi.io/devs') 
    //     data = await res.json()
        
    
    //     // return {
    //     //   props: {
    //     //     devs,
    //     //   },
    //     const paths = data.map(items => ({params:{uuid:items.id}}))

    //     return {
    //       paths,
    //       fallback: true
    //     }
    // }
      
      
    