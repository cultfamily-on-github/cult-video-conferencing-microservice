import { IGameProposal, IVote, IMasterkeyFileEntry, IApprenticeKeyFileEntry } from "./data-model.ts";
// import { SortService, Direction } from "https://deno.land/x/sort@v1.1.1/mod.ts"

export class PersistenceService {

    public static readonly pathToIndexHTML = `${Deno.cwd()}/docs`;
    public static readonly pathToAssets = `${PersistenceService.pathToIndexHTML}/assets`;
    public static readonly pathToCertificates = '/etc/letsencrypt/live/cultplayground.org';

    public static pathToGameProposals = `${Deno.cwd()}/operational-data/game-proposals.json`;
    public static pathToMasterKeys = `${Deno.cwd()}/operational-data/master-keys.json`;
    public static pathToApprenticeKeys = `${Deno.cwd()}/operational-data/apprentice-keys.json`;
    public static pathToVotes = `${Deno.cwd()}/operational-data/votes.json`;

    public static async readGameProposals(): Promise<IGameProposal[]> {
        const gameProposals: IGameProposal[] = JSON.parse(await Deno.readTextFile(PersistenceService.pathToGameProposals))
        return gameProposals
    }

    public static async readVotes(): Promise<IVote[]> {
        const votes: IVote[] = JSON.parse(await Deno.readTextFile(PersistenceService.pathToVotes))
        return votes
    }
    
    public static async readMasterKeysFile(): Promise<IMasterkeyFileEntry[]> {
        return JSON.parse(await Deno.readTextFile(PersistenceService.pathToMasterKeys))
    }

    public static async readApprenticeKeysFile(): Promise<IApprenticeKeyFileEntry[]> {
        return JSON.parse(await Deno.readTextFile(PersistenceService.pathToApprenticeKeys))
    }

    public static async writeGameProposals(gameProposals: IGameProposal[]): Promise<void> {
        await Deno.writeTextFile(PersistenceService.pathToGameProposals, JSON.stringify(gameProposals))
    }

    public static async writeVotes(votes: IVote[]): Promise<void> {
        await Deno.writeTextFile(PersistenceService.pathToVotes, JSON.stringify(votes))
    }

}