import { theme } from "components/theme";
import { ProgressBar } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";


export const Loader = () => {
    return (
        <LoaderWrapper>
            <ProgressBar
    height="120"
    width="120"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{}}
    wrapperClass="progress-bar-wrapper"
    borderColor={theme.colors.glacier}
    barColor={theme.colors.blueIce}
/>
         </LoaderWrapper>
     )
 }
