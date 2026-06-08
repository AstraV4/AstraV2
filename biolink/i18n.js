// Systeme de langues (FR / EN / ES)
const LANGS = ['fr', 'en', 'es'];
const LANG_LABEL = { fr: 'FR', en: 'EN', es: 'ES' };

const I18N = {
  fr: {
    nav_leaderboard: 'Classement', nav_login: 'Connexion', nav_register: "S'inscrire",
    nav_mypage: 'Ma page', nav_dashboard: 'Mon profil', nav_admin: 'Admin',
    hero_eyebrow: 'le lien-en-bio, en mieux',
    hero_title_1: 'Une page.', hero_title_2: 'Tout ton univers.',
    hero_desc: 'Avatar, musique, effets, présence Discord en direct, badges. Crée ton profil en quelques secondes et partage un seul lien.',
    your_username: 'tonpseudo',
    cta_create: 'Créer ma page', cta_have_account: "J'ai déjà un compte",
    cta_edit: 'Modifier mon profil', cta_view: 'Voir ma page',
    stat_profiles: 'profils déjà créés',
    feat1_t: 'Musique & ambiance', feat1_d: 'Cherche un son ou uploade le tien, fond image ou vidéo, effets animés.',
    feat2_t: 'Discord en direct', feat2_d: 'Statut, activité et serveur affichés et mis à jour en temps réel.',
    feat3_t: '100% personnalisable', feat3_d: 'Couleurs, curseurs, badges, forme de carte. Ta page te ressemble.',
    recent_title: 'Derniers profils', footer_made: 'fait avec',
    login_h: 'Connexion', login_sub: 'Content de te revoir.', login_btn: 'Se connecter',
    login_forgot: 'Mot de passe oublié ?', login_no_account: 'Pas encore de compte ?',
    register_h: 'Créer un compte', register_sub: "Choisis ton pseudo, c'est l'adresse de ta page.",
    register_btn: 'Créer mon profil', register_have: 'Déjà un compte ?',
    f_username: 'Pseudo', f_password: 'Mot de passe', pw_min: '6 caractères minimum'
  },
  en: {
    nav_leaderboard: 'Leaderboard', nav_login: 'Log in', nav_register: 'Sign up',
    nav_mypage: 'My page', nav_dashboard: 'My profile', nav_admin: 'Admin',
    hero_eyebrow: 'the link-in-bio, but better',
    hero_title_1: 'One page.', hero_title_2: 'Your whole world.',
    hero_desc: 'Avatar, music, effects, live Discord presence, badges. Build your profile in seconds and share a single link.',
    your_username: 'yourname',
    cta_create: 'Create my page', cta_have_account: 'I already have an account',
    cta_edit: 'Edit my profile', cta_view: 'View my page',
    stat_profiles: 'profiles created',
    feat1_t: 'Music & vibe', feat1_d: 'Search a track or upload your own, image or video background, animated effects.',
    feat2_t: 'Live Discord', feat2_d: 'Status, activity and server shown and updated in real time.',
    feat3_t: '100% customizable', feat3_d: 'Colors, cursors, badges, card shape. Your page, your style.',
    recent_title: 'Latest profiles', footer_made: 'made with',
    login_h: 'Log in', login_sub: 'Good to see you again.', login_btn: 'Log in',
    login_forgot: 'Forgot password?', login_no_account: 'No account yet?',
    register_h: 'Create an account', register_sub: 'Pick your username, it becomes your page address.',
    register_btn: 'Create my profile', register_have: 'Already have an account?',
    f_username: 'Username', f_password: 'Password', pw_min: '6 characters minimum'
  },
  es: {
    nav_leaderboard: 'Clasificación', nav_login: 'Entrar', nav_register: 'Registrarse',
    nav_mypage: 'Mi página', nav_dashboard: 'Mi perfil', nav_admin: 'Admin',
    hero_eyebrow: 'el link-in-bio, pero mejor',
    hero_title_1: 'Una página.', hero_title_2: 'Todo tu universo.',
    hero_desc: 'Avatar, música, efectos, presencia de Discord en directo, insignias. Crea tu perfil en segundos y comparte un solo enlace.',
    your_username: 'tunombre',
    cta_create: 'Crear mi página', cta_have_account: 'Ya tengo una cuenta',
    cta_edit: 'Editar mi perfil', cta_view: 'Ver mi página',
    stat_profiles: 'perfiles creados',
    feat1_t: 'Música y ambiente', feat1_d: 'Busca una canción o sube la tuya, fondo de imagen o vídeo, efectos animados.',
    feat2_t: 'Discord en directo', feat2_d: 'Estado, actividad y servidor mostrados y actualizados en tiempo real.',
    feat3_t: '100% personalizable', feat3_d: 'Colores, cursores, insignias, forma de tarjeta. Tu página, tu estilo.',
    recent_title: 'Últimos perfiles', footer_made: 'hecho con',
    login_h: 'Entrar', login_sub: 'Qué bueno verte de nuevo.', login_btn: 'Entrar',
    login_forgot: '¿Olvidaste tu contraseña?', login_no_account: '¿Aún no tienes cuenta?',
    register_h: 'Crear una cuenta', register_sub: 'Elige tu nombre de usuario, será la dirección de tu página.',
    register_btn: 'Crear mi perfil', register_have: '¿Ya tienes cuenta?',
    f_username: 'Usuario', f_password: 'Contraseña', pw_min: 'mínimo 6 caracteres'
  }
};

function translator(lang) {
  const L = I18N[lang] || I18N.fr;
  return (key) => (L[key] !== undefined ? L[key] : (I18N.fr[key] !== undefined ? I18N.fr[key] : key));
}

module.exports = { LANGS, LANG_LABEL, I18N, translator };
