import React, {useEffect, useState, useRef} from 'react'
import {Link} from  'react-router-dom'

export function Home(){
    const [firstname, setfirstname]= useState('')
    const [lastname, setlastname]= useState('')
    const [tier, settier]= useState('')	
    const [amount, setamount]= useState('')
	
useEffect(()=>{
if(tier==='1'){
setamount(10500)
}
else if(tier==='2'){
setamount(22000)
}
else if(tier==='3'){
setamount(39000)
}
}, [tier])
   
   return <div>
        <fieldset>
<form>
<label htmlFor='firstname'><input id='firstname' name='firstname' value={firstname} onChange={(event)=>{setfirstname(event.target.value)}}/>Firstname</label>
<label htmlFor='lastname'><input id='lastname' name='lastname' value={lastname} onChange={(event)=>{setlastname(event.target.value)}}/>Lastname</label>
<label htmlFor='tier'><select id='tier' name='tier' value={tier} onChange={(event)=>{settier(event.target.value)}}>
<option value=''>1->Select Tier</option>
<option value='1'>1->10,000</option>
<option value='2'>2->20,000</option>
<option value='3'>3->30,000</option>
</select>Tier</label>
<div>Amount to be received:{amount}</div>
</form>
</fieldset>
    </div>
}