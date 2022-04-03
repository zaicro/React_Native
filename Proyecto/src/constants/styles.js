export const ROOT = {
  dn_azul: '#0D5CAB',
  dn_blanco: '#FFFFFF',
  dn_primary: '#0D5CAB',
  dn_primary_light: '#00b0ff',
  dn_primary_dark: '#083B6E',
  dn_success: '#218838',
  dn_success_light: '#65be7a',
  dn_success_dark: '#155724',
  dn_warning: '#ffc107',
  dn_warning_light: '#fff3cd',
  dn_warning_dark: '#856404',
  dn_danger: '#dc3545',
  dn_danger_light: '#FFCDD2',
  dn_danger_dark: '#721c24',
  boder_color: '#e6e6e6',
  border_radius: 5
};

export const MAIN = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: ROOT.dn_blanco,
    paddingHorizontal: 10,
    borderColor: ROOT.boder_color,
    borderRadius: ROOT.border_radius,
    borderWidth: 1,
    fontSize: 18,
  },
  errorText: {
    marginTop: -8,
    fontSize: 10,
    color: ROOT.dn_danger,
  },
  errorInput: {
    backgroundColor: ROOT.dn_danger_light,
    borderColor: ROOT.dn_danger_dark
  },
  button:{
    pressable: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:10,
      paddingVertical: 12,
      borderRadius: ROOT.border_radius,
      backgroundColor: ROOT.dn_azul,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: ROOT.dn_blanco,
    }
  }

};