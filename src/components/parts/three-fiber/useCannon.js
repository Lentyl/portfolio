import * as CANNON from 'cannon'
import React, {
    useState,
    useEffect,
    useContext,
    useRef
} from 'react'
import {
    useFrame
} from '@react-three/fiber'

// Cannon-world context provider
const context = React.createContext()
export function Provider({
    children
}) {
    // Set up physics
    const [world] = useState(() => new CANNON.World())
    useEffect(() => {
        world.broadphase = new CANNON.NaiveBroadphase()
        world.solver.iterations = 10

        const canvasDistance = document.querySelector(".blocksCanvas").getBoundingClientRect().top;

        const dist = window.scrollY + canvasDistance;

        const handleScroll = () => {
            if (window.scrollY >= dist - 150) {
                world.gravity.set(0, 0, -25)
            }
        };

        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [world])

    // Run world stepper every frame
    useFrame(() => world.step(1 / 60))
    // Distribute world via context
    return <context.Provider value = {
        world
    }
    children = {
        children
    }
    />
}

// Custom hook to maintain a world physics body
export function useCannon(props, fn) {
    const ref = useRef()
    // Get cannon world object
    const world = useContext(context)
    // Instanciate a physics body
    const [body] = useState(() => {
        const body = new CANNON.Body(props)
        fn(body)
        return body
    })
    useEffect(() => {
        // Add body to world on mount
        world.addBody(body)
        // Remove body on unmount
        return () => world.removeBody(body)
    }, [world, body])

    useFrame(() => {
        if (ref.current) {
            // Transport cannon physics into the referenced threejs object
            ref.current.position.copy(body.position)
            ref.current.quaternion.copy(body.quaternion)
        }
    })

    return ref
}