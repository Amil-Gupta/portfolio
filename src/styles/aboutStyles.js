const styles = {
    about:{
        border: '.2vh solid gray',
        backgroundColor: '#353233',
        borderRadius: '1rem',
        margin: '1rem 1rem',
        padding: '.5rem',
        height: '100%',
        overflow: 'scroll',

        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },

    row:{
        display: 'flex',
        padding: '.3rem 0',
    },

    rowName:{
        backgroundColor: 'gray',
        margin: '0 .3rem',
        padding: '.5rem .5rem',
        minWidth: '100px',
        textAlign: 'center',
    },

    rowValue:{
        margin: '0 .3rem',
        padding: '.5rem .5rem',
        flex: '1'
    }
}

export default styles;