const getDesktopShortcuts = (): any[] => {
	return [
		{
			name: 'GitHub',
			url: 'https://github.com/cophilot',
			img: 'assets/github.png',
		},
		{
			name: 'E-Mail',
			url: 'mailto:info@philipp-bonin.com',
			img: 'assets/email.png',
		},
		{
			name: 'Terminal',
			url: 'https://shell.philipp-bonin.com/',
			img: 'assets/terminal.png',
		},
	];
};

export default getDesktopShortcuts;
