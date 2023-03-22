let permission;

permission = 'director';

switch (permission) {
	case 'common':
		console.log('Common user');
		break;

	case 'manager':
		console.log('Manager user');
		break;

	case 'director':
		console.log('Director user');
		break;

	// If it's none of the above:
	default:
		console.log('Unrecognized user');
}