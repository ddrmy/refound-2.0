type Props = React.ComponentProps<"button"> & {
    isLoading?: boolean
}

export function Button({
    children,
    isLoading,
    type = "button",
    ...rest
} : Props){
    return (
        <button type={type} disabled={isLoading} {...rest} className="flex items-center justify-center bg-green-100 rounded-lg text-white hover:bg-green-200 transition ease-linear h-12 disabled:opacity-50 disabled:cursor-progress">
            {children}
        </button>
    )
}