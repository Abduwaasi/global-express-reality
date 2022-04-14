module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '93c7687daf1f43b34adbb76c683c0466'),
  },
});
