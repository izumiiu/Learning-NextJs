
// แบบไม่ Destructuring -----------------------------------------------------------------------------------------------

// export default async function UserDetails(props: { params: Promise<{ id: string }>}){

//     const params = await props.params;
//     const id = params.id;

//     return(
//         <div>
//             <h1>Showing details for user #{id}</h1>
//         </div>
//     );

// }


// แบบ Destructuring -------------------------------------------------------------------------------------------------

const UserDetails = async ({ params }: { params: Promise<{ id: string}>}) => {
    const { id } = await params;

    return(
        <div>
            <h1>Showing details for user #{id}</h1>
        </div>
    );
}

export default UserDetails