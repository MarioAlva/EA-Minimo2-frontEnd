import React, { useState } from 'react'
import '../css/Meet.css'
import Jitsi from 'react-jitsi'

const Meet: React.FC = () => {
    const [roomName, setRoomName] = useState('')
    const [onCall, setOnCall] = useState(false)
    const [error, setError] = useState(false)
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    let doCode = () => {
        let result = '';
        for(var i = 0; i < 7; i++){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    let result = doCode();

    return onCall
    ? (
      <Jitsi
        roomName={roomName}
        containerStyle={{width: '100%', height: '100%'}}
        frameStyle={{width: '100%', height: '100%', display: 'block', position: 'absolute', top: '0', bottom: '0', right: '0', border: '0'}}
        onAPILoad={JitsiMeetAPI => {console.log(('loaded'))}}
      />
      )
    : (
      <>
        <div className='meet-title'>Hola Usuario</div>
            <div className='meet-container'>
                <div className='meet-half'>
                    <h1>Join a room</h1>
                    <input className='meet-input' type='text' placeholder='Room code' value={roomName} onChange={e => setRoomName(e.target.value)} />
                    {error && <p className='meet-error'>Room name must be 7 characters long</p>}
                    <button className='meet-join' onClick={() => { if(roomName==='' || roomName.length!==7){setError(true); setTimeout(() => setError(false), 3000) }else{result = ''; setOnCall(true)}}}> Join</button>
                </div>
            <div className='meet-half meet-separator' style={{marginLeft: "2%"}}>
                <h1>Or create a room</h1>
                <button className='meet-create' onClick={() => { result = doCode(); setRoomName(result); setOnCall(true)}}> Create a meeting</button>
            </div>
        </div>
      </>
    )
}

export default Meet