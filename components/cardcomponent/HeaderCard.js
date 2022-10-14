import React from 'react'
import HdSt from './HeaderStyles.module.css'

function HeaderCard(){
    return(
        <><><><div className={HdSt.CardContainer}>
            <div className={HdSt.CardImage}>
                <Image
                    src={'./ecell1.png'}
                    width={640}
                    height={440} />
            </div>
            <div className='HdSt.CardTitle'>
                Type1

            </div>

        </div><div className={HdSt.CardContainer}>
                <div className={HdSt.CardImage}>
                    <Image
                        src={'./ecell2.png'}
                        width={640}
                        height={440} />
                </div>
                <div className='HdSt.CardTitle'>
                    Type2

                </div>

            </div></><div className={HdSt.CardContainer}>
                <div className={HdSt.CardImage}>
                    <Image
                        src={'./ecell3.png'}
                        width={640}
                        height={440} />
                </div>
                <div className='HdSt.CardTitle'>
                    Type3

                </div>

            </div></><div className={HdSt.CardContainer}>
                <div className={HdSt.CardImage}>
                    <Image
                        src={'./ecell4.png'}
                        width={640}
                        height={440} />
                </div>
                <div className='HdSt.CardTitle'>
                    Type4

                </div>

            </div></>
    )

}

export default HeaderCard