import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { GameProposalOrganizer } from "./game-proposal-organizer.ts"

Deno.test("get next free expiry date", async () => {

    const testInput = [
        {
            "id": 1,
            "text": "a",
            "proposalDateUTC": "2022-09-30 10:46:14",
            "expiryDateUTC": "2022-09-30 00:00:00",
            "rating": 0,
            "proposedBy": "https://twitter.com/Peer2PeerE"
        },
        {
            "id": 1,
            "text": "a",
            "proposalDateUTC": "2022-09-30 10:46:14",
            "expiryDateUTC": "2022-10-01 00:00:00",
            "rating": 0,
            "proposedBy": "https://twitter.com/Peer2PeerE"
        }
    ]

    const actualOutput = GameProposalOrganizer.getNextFreeExpiryDate(testInput) // SUT
    const expectedOutput = "2022-10-02 00:00:00"
    assertEquals(actualOutput, expectedOutput)

})