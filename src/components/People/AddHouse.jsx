import React, { useState } from 'react'
import People from './People'


const AddHouse = () => {
    const  [HouseData, SetHouseData] = useState({
        HouseID: "",
        Address: "",
        LandLine: "",
        WaterSupply: "",
        LandOwnerShip: "",
        LandUseage: "",
        toilet: "",
        HouseOwnerShip: "",
        RoofML: "",
        wallML: "",
        FloorML: "",
        HaveElec: "",
        FoodEangry: "",
        LandSize: "",
        TypeofHouse: ""
    })

    const [divs, setDivs] = useState([
        { id: 1, 
            fields: 
            { 
                Fullname: "", 
                email: "",
                NIC: "", 
                Dob: "", 
                School: "",
                Mobile: "", 
                gender: "", 
                Languge: "", 
                Education: "",
                jobs: "",
                Aidholders: ""                 
            } 
        },
      ]);

      const handleAddDiv = () => {
        setDivs([
          ...divs,
          {
            id: divs.length + 1,
            fields: 
            { 
                Fullname: "", 
                email: "",
                NIC: "", 
                Dob: "", 
                School: "",
                Mobile: "", 
                gender: "", 
                Languge: "", 
                Education: "",
                jobs: "",
                Aidholders: ""                 
            } 
          },
        ]);
      };

      const handleRemoveDiv = (id) => {
        setDivs(divs.filter((div) => div.id !== id));
      };

      const handleInputChange = (id, fieldName, value) => {
        const updatedDivs = divs.map((div) =>
          div.id === id
            ? { ...div, fields: { ...div.fields, [fieldName]: value } }
            : div
        );
        setDivs(updatedDivs);
      };

      const handleHouseDataChange = (field, value) => {
        SetHouseData({
            ...HouseData,
            [field]: value
        });
    };

      const headleAddMember = (e) => {
        e.preventDefault();

        const HouseDataMember = []
        HouseDataMember.push(HouseData)
        HouseDataMember.push(divs)

        console.log(HouseDataMember)
      }


  return (
    <div>
        <div className='py-4 px-4 my-2'>
            <h1 className='text-gray-500 text-xs'>{location.pathname}</h1>
            <h1 className='text-blue-500 font-semibold text-xl'>People</h1>

            <People />

            <div className="">
                <form method="post" onSubmit={headleAddMember}>
                    <div className="md:grid grid-cols-2 gap-4">
                        <div className="bg-white px-4 py-6 my-4 rounded shadow-md">
                            <h1 className="text-gray-500 font-semibold">House Information</h1>
                            <hr />

                            <div className="my-2">
                                <input type="text" name="" id="" className="w-full h-12 rounded bg-gray-200 pl-2 my-2" placeholder='House Number' required
                                onChange={e => handleHouseDataChange('HouseID', e.target.value)}/>

                                <textarea name="" id="" cols="30" rows="10" className="w-full h-24 rounded bg-gray-200 pl-2 my-2 p-4" placeholder='House Address'
                                onChange={e => handleHouseDataChange('Address', e.target.value)}></textarea>

                                <div className="md:grid grid-cols-2 gap-4">
                                    <input type="text" name="" id="" className="w-full h-12 rounded bg-gray-200 pl-2 my-2" placeholder='LandLine Number'
                                    onChange={e => handleHouseDataChange('LandLine', e.target.value)}/>

                                    <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                    onChange={e => handleHouseDataChange('WaterSupply', e.target.value)}>
                                        <option value="">Water Suppply</option>
                                        <option value="In Graden Wells">In Graden Wells</option>
                                        <option value="Wells">Wells</option>
                                        <option value="Tube Wells">Tube Wells</option>
                                        <option value="Water Line">Water Line</option>
                                        <option value="River or Tank">River or Tank</option>
                                    </select>
                                </div>

                                <div className="md:grid grid-cols-2 gap-4">
                                    <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                    onChange={e => handleHouseDataChange('LandOwnerShip', e.target.value)}>
                                        <option value="">Land Ownership</option>
                                        <option value="acre 1/4">acre 1/4</option>
                                        <option value="acre 1/4 - 1/2">acre 1/4 - 1/2</option>
                                        <option value="acre 1/2 - 3/4">acre 1/2 - 3/4</option>
                                        <option value="acre 3/4">acre 3/4</option>
                                        <option value="acre 1-2">acre 1-2</option>
                                        <option value="acre 2-5">acre 2-5</option>
                                        <option value="acre 5 or higer">acre 5 or higer</option>
                                    </select>

                                    <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                    onChange={e => handleHouseDataChange('LandUseage', e.target.value)}>
                                        <option value="">Land Useage</option>
                                        <option value="rice ">rice </option>
                                        <option value="mix">mix</option>
                                        <option value="vergitable">vergitable</option>
                                        <option value="none">none</option>
                                    </select>
                                </div>

                                <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                onChange={e => handleHouseDataChange('toilet', e.target.value)}>
                                    <option value="">Toilets</option>
                                    <option value="toilet command ">toilet command </option>
                                    <option value="toilet non-command">toilet non-command</option>
                                    <option value="no toilet">no toilet</option>
                                </select>

                                
  

                                <p className="text-gray-500 mt-4 font-semibold">House Construction Materials / Ownership </p>
                                <hr />

                                <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                onChange={e => handleHouseDataChange('HouseOwnerShip', e.target.value)}>
                                    <option value="">House Ownership</option>
                                    <option value="owner">Owner</option>
                                    <option value="rent">Rent</option>
                                    <option value="illegal living">Illegal living</option>
                                    <option value="no-house">No-House</option>
                                </select>

                                <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                onChange={e => handleHouseDataChange('RoofML', e.target.value)}>
                                    <option value="">Roof Materials</option>
                                    <option value="Asbestos">Asbestos  </option>
                                    <option value="Amano">Amano  </option>
                                    <option value="Coconet Leaves">coconet leaves  </option>
                                </select>

                                <div className="md:grid grid-cols-2 gap-4">
                                    <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                    onChange={e => handleHouseDataChange('wallML', e.target.value)}>
                                        <option value="">Wall Materials</option>
                                        <option value="Bricks / cement bricks">Bricks / cement bricks</option>
                                        <option value="clay ">clay </option>
                                        <option value="Coconet Leaves">Coconet Leaves</option>
                                    </select>

                                    <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                    onChange={e => handleHouseDataChange('FloorML', e.target.value)}>
                                        <option value="">Floor  Materials</option>
                                        <option value="Tile">Tile  </option>
                                        <option value="Cement ">Cement   </option>
                                        <option value="clay ">clay   </option>
                                    </select>
                                </div>

                                <hr className='my-4'/>

                                <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                onChange={e => handleHouseDataChange('HaveElec', e.target.value)}>
                                    <option value="">Have Electricty</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                
                                <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                onChange={e => handleHouseDataChange('FoodEangry', e.target.value)}>
                                    <option value="">Food Parper Eangry</option>
                                    <option value="wood">Wood</option>
                                    <option value="electricty">Electricty</option>
                                    <option value="gas	">Gas</option>
                                    <option value="bio gas">Bio Gas</option>

                                </select>

                                <div className="md:grid grid-cols-2 gap-4"
                                onChange={e => handleHouseDataChange('LandSize', e.target.value)}>
                                    <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2'>
                                        <option value="">House Land Size</option>
                                        <option value="300 sq.ft low">300 sq.ft low</option>
                                        <option value="300 sq.ft - 1000 sq.ft ">300 sq.ft - 1000 sq.ft </option>
                                        <option value="1000 sq.ft - 1500 sq.ft">1000 sq.ft - 1500 sq.ft</option>
                                        <option value="1500 sq.ft high">1500 sq.ft high</option>
                                    </select>

                                    <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                    onChange={e => handleHouseDataChange('TypeofHouse', e.target.value)}>
                                        <option value="">Type of House</option>
                                        <option value="fix">fix</option>
                                        <option value="semi fix ">semi fix</option>
                                        <option value="temporary  ">temporary</option>
                                    </select>
                                </div>


                            </div>
                        </div> 
                        <div className="bg-white px-4 py-6 my-4 rounded shadow-md">
                            <h1 className="text-gray-500 font-semibold">House Members</h1>
                            <hr className='mb-2'/>
                            {divs.map((div) => (
                                <div key={div.id} className='mb-6 border-l-2 border-red-500 px-2 rounded-xl'>
                                    <textarea required name="" className="w-full h-24 rounded bg-gray-200 pl-2 my-2 px-4 py-2" placeholder='Full Name'
                                        onChange={(e) => handleInputChange(div.id, "Fullname", e.target.value)}
                                        value={div.fields.Fullname}
                                    ></textarea>

                                    <div className="md:grid grid-cols-2 gap-4 mb-4">
                                        <input
                                            type="email"
                                            value={div.fields.email}
                                            onChange={(e) => handleInputChange(div.id, "email", e.target.value)}
                                            placeholder="Email Address"
                                            className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                            
                                        />
                                        <input
                                            type="text" 
                                            value={div.fields.NIC}
                                            onChange={(e) => handleInputChange(div.id, "NIC", e.target.value)}
                                            placeholder="NIC Number"
                                            className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                            
                                        />
                                    </div>
                                    (date of birth)
                                    <input
                                        type="date"
                                        value={div.fields.Dob}
                                        onChange={(e) => handleInputChange(div.id, "Dob", e.target.value)}
                                        placeholder=""
                                        className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                        required
                                    />
                                    <input
                                        type="text"
                                        value={div.fields.School}
                                        onChange={(e) => handleInputChange(div.id, "School", e.target.value)}
                                        placeholder="School"
                                        className='w-full h-12 rounded bg-gray-200 pl-2 my-2'                                        
                                    />

                                    <div className="md:grid grid-cols-2 gap-4 mb-4">
                                        <input
                                            type="text"
                                            value={div.fields.Mobile}
                                            onChange={(e) => handleInputChange(div.id, "Mobile", e.target.value)}
                                            placeholder="Mobile Number"
                                            className='w-full h-12 rounded bg-gray-200 pl-2 my-2'
                                            required
                                        />
                                        <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2' required
                                            value={div.fields.gender}
                                            onChange={(e) => handleInputChange(div.id, "gender", e.target.value)}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>

                                    <div className="md:grid grid-cols-2 gap-4 mb-4">
                                        <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2' required
                                            value={div.fields.Languge}
                                            onChange={(e) => handleInputChange(div.id, "Languge", e.target.value)}
                                        >
                                            <option value="">Select Languge</option>
                                            <option value="Sinhala">Sinhala</option>
                                            <option value="Tamil">Tamil</option>
                                            <option value="Muslim">Muslim</option>
                                            <option value="other">Other</option>
                                        </select>

                                        <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2' required
                                            value={div.fields.Education}
                                            onChange={(e) => handleInputChange(div.id, "Education", e.target.value)}
                                        >
                                            <option value="">Select Education</option>
                                            <option value="no School">No School</option>
                                            <option value="1 - 5">1 - 5</option>
                                            <option value="6 - 10">6 - 10</option>
                                            <option value="to OLs">Upto OLs</option>
                                            <option value="to ALs">Upto ALs</option>
                                            <option value="AL Pass">AL Pass</option>
                                            <option value="Degree or Higher">Degree or Higher</option>
                                        </select>
                                    </div>

                                    <div className="md:grid grid-cols-2 gap-4 mb-4">
                                        <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2' 
                                            value={div.fields.jobs}
                                            onChange={(e) => handleInputChange(div.id, "jobs", e.target.value)}
                                        >
                                            <option value="">Select Job</option>
                                            <option value="Sinhala">Agri</option>
                                            <option value="Government - Doctor">Government - Doctor</option>
                                            <option value="Government - Teacher">Government - Teacher</option>
                                            <option value="Government - Engineer">Government - Engineer</option>
                                            <option value="Government - Lawyer">Government - Lawyer</option>
                                            <option value="Government">Government (Other)</option>
                                            <option value="Industrial">Industrial</option>
                                            <option value="Private">Private</option>
                                            <option value="Self Employee">Self Employee</option>
                                            <option value="No Job">No Job</option>
                                        </select>

                                        <select className='w-full h-12 rounded bg-gray-200 pl-2 my-2' required
                                            value={div.fields.Aidholders}
                                            onChange={(e) => handleInputChange(div.id, "Aidholders", e.target.value)}
                                        >
                                            <option value="">Select Aids (Optional)</option>
                                            <option value="Samurdhi">Samurdhi</option>
                                            <option value="Mahajanadara / 1000/-">Mahajanadara / 1000/-</option>
                                            <option value="disabled aid holders">disabled aid holders</option>
                                            <option value="disease aid holders">disease aid holders</option>
                                            <option value="No Aids">No Aids</option>
                                        </select>
                                    </div>
                                    <button type="button" className='bg-red-500 text-white rounded py-1 px-4 mb-2' onClick={() => handleRemoveDiv(div.id)}>
                                        Remove
                                    </button>
                                    <hr className=''/>
                                </div>
                            ))}
                            <div className="flex justify-between">
                                <button type="button" className='bg-blue-500 text-white rounded py-2 px-4 duration-500 hover:bg-blue-600' onClick={handleAddDiv}>
                                    New Member
                                </button> <br />
                                <input type="submit" className='bg-green-500 text-white rounded py-2 px-4' value="Add House" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddHouse