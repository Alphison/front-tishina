import { Grid } from "react-loader-spinner";

export default function Loader({w}: {w: number}) {
    return (
        <div className={`mx-auto w-[${w}px]`}>
            <Grid
                visible={true}
                height={w}
                width={w}
                color="#4E6F54"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
            />
        </div> 
    )
}