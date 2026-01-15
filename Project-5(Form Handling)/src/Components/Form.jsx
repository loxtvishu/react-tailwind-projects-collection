import { React, useState } from 'react'

const Form = () => {
    const [user, setuser] = useState("")
    const [allUsers, setallUsers] = useState([])
    const [Role, setRole] = useState("")
    const [userEmail, setuserEmail] = useState("")
    const [userProfileURL, setuserProfileURL] = useState("")

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newEntry = {
            name: user,
            role: Role,
            email: userEmail,
            image: userProfileURL
        };
        setallUsers([...allUsers, newEntry]);
        console.log(newEntry);

        setuser('');
        setRole('');
        setuserEmail('');
        setuserProfileURL('');
        
        console.log(allUsers);
    }



    return (
        <>
            <form onSubmit={(e) => {
                SubmitHandler(e)
            }} className='h-fit bg-[yellow] p-5 flex flex-wrap justify-between'>
                <input
                    onChange={(e) => {
                        setuser(e.target.value)
                    }}
                    value={user}
                    type="text"
                    required
                    placeholder="Enter Your Name"
                    className='bg-[#333] text-white outline-none border border-gray-600 rounded mb-4 w-[49%] p-2'
                />

                <input onChange={(e) => {
                    setRole(e.target.value)

                }}
                    value={Role}
                    required
                    type="text"
                    placeholder="Job Role (Ex: React Developer)"
                    className='bg-[#333] text-white outline-none border border-gray-600 rounded mb-4 w-[49%] p-2'
                />

                <input onChange={(e) => {
                    setuserEmail(e.target.value)
                }}
                    required
                    type="email"
                    value={userEmail}
                    placeholder="example@gmail.com"
                    className='bg-[#333] text-white outline-none border border-gray-600 rounded mb-4 w-[49%] p-2'
                />

                <input onChange={(e) => {
                    setuserProfileURL(e.target.value)
                }}
                    required
                    type="text"
                    value={userProfileURL}
                    placeholder="Profile Image URL"
                    className='bg-[#333] text-white outline-none border border-gray-600 rounded mb-4 w-[49%] p-2'
                />
                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mt-2 active:scale-95 transition-transform duration-200 '>
                    Submit
                </button>
            </form>
            {allUsers.map(function (elem, idx) {
                return (
                    <div key={idx} className="bg-white p-4 m-2 rounded text-black">
                        {/* Ab hum dot (.) lagakar specific data nikalenge */}
                        <h1 className="font-bold text-xl">Name: {elem.name}</h1>
                        <h2>Role: {elem.role}</h2>
                        <h3>Email: {elem.email}</h3>
                        <img src={elem.image} alt="Profile" className="h-20 w-20 rounded-full mt-2" />
                    </div>
                )
            })}
        </>
    )
}

export default Form