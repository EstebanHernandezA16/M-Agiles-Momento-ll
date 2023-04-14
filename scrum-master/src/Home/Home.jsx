import React from 'react'
import { Agenda } from '../Agenda/Agenda';

export function Home() {
    const URL_BANNER="https://firebasestorage.googleapis.com/v0/b/proyecto-scrum-momento-ll.appspot.com/o/banner.jpg?alt=media&token=8bf8b549-d12c-4156-ba83-0d80e1c4f5a8";
  return (
    <>
    <section>
        <div className='container'>
            <div className="row">
                <div className="col-12 col-md-8">
                    <img className='img-fuild w-100' src={URL_BANNER} alt="" />
                </div>
                <div className="col-12 col-md-4">
                    <Agenda />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

