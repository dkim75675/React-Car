import Button from "./Button"
import Inputs from "./Inputs"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseMake, chooseModel, chooseColor, chooseYear } from "../redux/slices/RootSlice"



interface CarFormProps {
    id?: string[]
}

const CarForm = (props:CarFormProps) => {
    
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.make } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 500);
            event.target.reset()
        } else {

            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(chooseColor(data.color));
            dispatch(chooseYear(data.year));

            server_calls.create(store.getState())
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }
    
    
    
    
    
    return (
    
        
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>    
                <div>
                    <label htmlFor="make">Make</label>
                    <Inputs {...register('make')}name='make' placeholder='Make'/>
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Inputs {...register('model')}name='model' placeholder='Model'/>
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Inputs {...register('color')}name='color' placeholder='Color'/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Inputs {...register('year')}name='year' placeholder='Year'/>
                </div>
                <div className="flex p-1">
                    <Button                        
                        classname="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CarForm
