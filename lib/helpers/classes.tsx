function classes(...names: (any) []):string{
    return names.filter(Boolean).join(" ");
}

export default classes;