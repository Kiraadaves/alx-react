const getFullYear = () => { return new Date().getFullYear(); }

const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return 'Holberton School';
    }
    else {
        return 'HOlberton School main dashboard';
    }
}

export { getFullYear, getFooterCopy };