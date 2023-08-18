import { useState } from "react"

export const DataEntry =() => {

    const [responses, setResponses] = useState([]);
    const [save, setSave] = useState([]);

    const handleSubmit = () => {
        console.log(formValues);
        setResponses([...responses, formValues])
        setFormValues({
            name: "",
            email: "",
            addres: ""
        })

    }

    const handleSave = () => {
        console.log(responses);
        setSave(responses);
        setResponses([]);
        console.log(save);

    }

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        addres : ""
    })

    return(
        <>
            <section className="flex">
                <div className="mx-10 mt-10 shadow-lg border p-5">
                    <h2>Fields Values:</h2>
                    <ul className="list-outside h-[220px] w-[500px] overflow-scroll overflow-x-hidden ">
                        {
                            responses.length > 0 && 
                            responses.map((res, index)=> (
                                <>
                                    <li key={index}>
                                        name: {res.name}, email: {res.email}, addres: {res.addres}
                                    </li>
                                </>
                            ))
                        }
                    </ul>
                </div>
                <div className="absolute bottom-0 left-1">
                    <form className="w-full max-w-lg mx-16 my-5 border shadow-lg m-10 p-10">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
                                Name
                            </label>
                            <input 
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                id="grid-name" 
                                type="text" 
                                placeholder="Enter your name"
                                name="name"
                                onChange={(e) => setFormValues({...formValues, name: e.target.value})}
                                value={formValues.name}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                                Email
                            </label>
                            <input 
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-last-name" 
                                type="email" 
                                placeholder="name@company.com"
                                name="email"
                                onChange={e => setFormValues({...formValues, email: e.target.value})}
                                value={formValues.email}
                            />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-addrss">
                                Adress
                            </label>
                            <input 
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-password" 
                                type="text" 
                                placeholder="Adress"
                                name="adress"
                                onChange={e => setFormValues({...formValues, addres: e.target.value})}
                                value={formValues.addres}
                            />
                            </div>
                        </div>
                        <div className="flex md:items-center justify-between">
                            <div className="md:w-1/3">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                                type="button" 
                                onClick={handleSubmit}>
                                Add Another
                            </button>
                            
                            </div>
                            <div>
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                                type="button" 
                                onClick={handleSave}>
                                Save
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="absolute right-20 h-[100px]">
                <table className="bg-white border border-gray-300 table-auto">
                    <thead>
                        <tr className="mt-3 mb-5">
                        <th className="px-6 py-3 bg-gray-100 border-b border-gray-300 w-[150px]">Name</th>
                        <th className="px-6 py-3 bg-gray-100 border-b border-gray-300 w-[150px]">Email</th>
                        <th className="px-6 py-3 bg-gray-100 border-b border-gray-300 w-[200px]">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {save.map((item) => (
                        <tr key={item.id}>
                            <td className="px-6 py-4 border-b border-gray-300 w-[150px]">{item.name}</td>
                            <td className="px-6 py-4 border-b border-gray-300 w-[150px]">{item.email}</td>
                            <td className="px-6 py-4 border-b border-gray-300 w-[200px]">{item.addres}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </section>
        </>
    )
}