export default function Uuid( {
  favoriteColor,
    createdAt,
    name,
    avatar,
    id
} ) { //{uuid}  


    const container = {
        maxWidth: '1000px',
    margin: '0 auto'    }

    return ( 
        <div style={container}>
            <h1>Developer Profile</h1> 
            <p>{favoriteColor}</p> 
            <p>{id}</p>
            <p>{createdAt}</p>
            <p>{name} {avatar}</p>
        </div>
    )}







    export async function getStaticPaths() {
      let users = await fetch('https://63938671ab513e12c510ef40.mockapi.io/devs');
      users = await users.json();
      const paths = users.map((user) => ({ params: { uuid: user.id } }));
      return {
        paths,
        fallback: false,
      };
    }
    



    // export async function getStaticPaths() {
    //   return {
    //     paths: [{ params: { uuid: '1' } }, 
    //     { params: { uuid: '2' } },
    //     { params: { uuid: '3' } },
    //     { params: { uuid: '4' } },
    //     { params: { uuid: '5' } },
    //     { params: { uuid: '6' } },
    //     { params: { uuid: '0' } },
    //     ],
    //     fallback: false, // can also be true or 'blocking'
    //   }
    // }







    export async function getStaticProps({params}) {
        // Call an external API endpoint to get posts.
        // You can use any data fetching library
        let res;
        res = await fetch('https://63938671ab513e12c510ef40.mockapi.io/devs') 
        let users = await res.json()
        const user = users.find((user) => user.id-1 === params.uid);
        const bio = { ...user};
        //let user = data.find(item=> item.id-1 == params.uuid)
        return {
          props: {
            bio,
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
      
      
    