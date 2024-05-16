import { Grid } from "react-loader-spinner";

export default function Loader() {
    return (
        <div className="mx-auto w-[80px]">
            <Grid
                visible={true}
                height="80"
                width="80"
                color="#4E6F54"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
            />
        </div> 
    )
}