import { createTheme } from '@material-ui/core/styles';

const standardSpace = '24px';
const colorDefs = {
  'redBase': '#cc4444',
  'redTransparent': 'rgba(140,20,20,0.75)',
  'gray': {
    veryLight: '#eee',
    light: '#dedede',
    medium: '#888',
    dark: '#555'
  }
}

const palette = {
    primary: {
      main: colorDefs.redBase,
      dark: '#fff',
      light: '#fff',
      contrastText: '#333',
    },
    secondary: {
      main: colorDefs.redTransparent,
      dark: '#fff',
      light: '#333',
      contrastText: '#fff'
    },
};

const typography = {
  'h4': {
    fontSize: '1rem',
    color: '#fff',
    display: 'inline-block'
  },
  'h5': {
    fontSize: '1.5rem',
    fontWeight: 700
  },
  'h6': {
    fontSize: '1rem',
    fontWeight: 700
  },
  'body2': {
    fontSize: '10px'
  }
}

const overrides = {
  MuiDialogTitle: {
    root: {
      backgroundColor: colorDefs.redBase,
      color: '#fff',
      fontWeight: 700
    }
  },
  MuiDialogContent: {
    root: {
      marginTop: standardSpace,
      paddingBottom: 0,
    }
  },
  MuiDialogActions: {
    root: {
      marginTop: standardSpace,
      marginBottom: standardSpace,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: standardSpace,
      paddingRight: standardSpace,
    }
  },
  MuiSwitch: {
    switchBase: {
      color: "#eee"
    },
    colorPrimary: {
      "&$checked": {
        color: 'white'
      }
    },
    track: {
      "$checked$checked + &": {
        opacity: 0.5,
        backgroundColor: "#eee"
      }
    }
  },
  MuiTableRow: {
    root: {
      '& th.MuiTableCell-root': {
        backgroundColor: colorDefs.redBase,
      },
      '& th.MuiTableCell-root:first-child': {
        borderTopLeftRadius: 10,
      },
      '& th.MuiTableCell-root:last-child': {
        borderTopRightRadius: 10,
      },
      '&:nth-child(odd) td.MuiTableCell-root': {
        backgroundColor: colorDefs.gray.light
      },
      '&:nth-child(even) td.MuiTableCell-root': {
        backgroundColor: colorDefs.gray.veryLight
      },
    }
  },
  MuiTableCell: {
    head: {
      borderColor: colorDefs.redBase,
      textTransform: 'uppercase',
      color: '#fff',
    },
    body: {
      borderColor: colorDefs.redBase,
    }
  }
};

const themeName = 'Topia.io Test Theme';

export default createTheme({ overrides, palette, typography, themeName });

