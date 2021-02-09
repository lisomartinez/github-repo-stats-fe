import React from "react"
import useFitText from "use-fit-text"

type Props = {
    name: string;
};

const RepoName: React.FC<Props> = ({name}) => {
    const { fontSize, ref } = useFitText({minFontSize: 20, maxFontSize: 100})

    return (
        <div className="px-5 text-2xl antialiased font-bold tracking-wide text-center uppercase">
            <div ref={ref} style={{fontSize, width: "100%", height: "3rem"}} >
                {name}
            </div>
        </div>

    )
}

export default RepoName
