import { PropsWithChildren } from "react"

export const HeroOrbit = ({ children, size, rotation, }: PropsWithChildren<{ size: number; rotation: number; }>) => {
    return (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[99] ">
                
                <div className="animate-spin [animation-duration:30s]">
                <div
                
                style={{
                    transform: `rotate(${rotation}deg)`,
                    width: `${size}px`,
                    height: `${size}px`
                }}>
                    <div className="inline-flex animate-float [animation-duration: .2s]"
                    style={{
                        transform: `rotate(${rotation * -1}deg)`
                    }}
                    >
                        {children}
                    </div>
                </div>
                </div>
            </div>
    )
}   
