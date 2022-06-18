import React , {useState,useEffect} from 'react';
import { toast } from 'react-toastify';
const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5000/user' ,{
            method:'GET',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setUsers(data))
    } ,[])

    const makeAdmin = email =>{
        fetch(`http://localhost:5000/users/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Bearer`
            }
          })
          .then(res => res.json() )
          .then(data => {
              console.log(data)
              toast.success("successfully make admin")
          })
    }
    return (
        <div>
             <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr className='border border-primary bg-base-100'>
                            
                            <th className='border border-primary text-lg'>No:</th>
                            <th className='border border-primary text-lg'>E-mail</th>
                            <th className='border border-primary text-lg'>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map( (user,index) =>
                             <tr className='border border-primary '>
                               <th className='border border-primary bg-black'>{index+1}</th>
                               <td className='border border-primary bg-black'>{user.email}</td>
                               <td className='border border-primary bg-black'> { user.role !== 'admin' && <button onClick={() =>makeAdmin(user.email)} className=' btn btn-primary'>Make Admin</button>}</td>
                               
                             </tr>
                           

                           )
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;