
export class PersistenceService {

    public static readonly pathToIndexHTML = `${Deno.cwd()}/docs`;
    public static readonly pathToAssets = `${PersistenceService.pathToIndexHTML}/assets`;
    public static readonly pathToCertificates = '/etc/letsencrypt/live/cultplayground.org';


}