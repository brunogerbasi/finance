import rem from "../../utils/rem"

const theme = {
  colors: {
    primary: '#06BD92',
    secondary: '#4FFEA6',
    background: '#f5f5f5',
    surface: '#ffffff',
    error: '#dc3545',
    text: '#333333',
    textSecondary: '#666666'
  },
  typography: {
    h1: rem(40),    
    h2: rem(32),    
    h3: rem(28),    
    p: rem(16),     
    small: rem(14)  
  },
  spacing: {
    xs: rem(4),   
    sm: rem(8),   
    md: rem(16),  
    lg: rem(24),  
    xl: rem(32)   
  },
  breakpoints: {
    mobile: rem(480),  
    tablet: rem(768),  
    desktop: rem(1024) 
  }
}

export default theme
