'use client'
import React, { useEffect, useRef } from 'react'

const VideoRoom = ({roomId}:{roomId:string}) => {
   const zpRef = useRef<any>(null)
   const containerRef = useRef<HTMLDivElement>(null);
   const startedRef = useRef(false);
   useEffect(()=>{
   if (startedRef.current) return;
   startedRef.current = true;

  const start = async ()=>{
    const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");
    const userId = crypto.randomUUID()
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID),
      process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET!,
      roomId,
      userId,
      "Stranger"
    );
console.log("APP ID:", process.env.NEXT_PUBLIC_ZEGO_APP_ID)
console.log("SECRET:", process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET)
console.log("ROOM ID:", roomId)
console.log("USER ID:", userId)
console.log("KIT TOKEN:", kitToken)

    const zp = ZegoUIKitPrebuilt.create(kitToken)
    zpRef.current=zp
    zpRef.current.joinRoom({
      container : containerRef.current,
      scenario: {mode: ZegoUIKitPrebuilt.OneONoneCall},
      showPreJoinView : false,
      showTextChat : true,
      maxUsers:2
    })
  }

  start();

  return ()=>{
    if(zpRef.current){
      try {
        zpRef.current.leaveRoom()
        zpRef.current.destroy()
      } catch (error) {
        zpRef.current=null
      }
    }
  }

  },[roomId])
  return (
    <div ref={containerRef} className='w-full h-[80vh]'/>
  )
}

export default VideoRoom