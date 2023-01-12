/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  PublicKey,
  Signer,
  WrappedInstruction,
  getProgramAddressWithFallback,
} from '@lorisleiva/js-core';

// Accounts.
export type RecoverNestedInstructionAccounts = {
  nestedAssociatedAccountAddress: PublicKey;
  nestedTokenMintAddress: PublicKey;
  destinationAssociatedAccountAddress: PublicKey;
  ownerAssociatedAccountAddress: PublicKey;
  ownerTokenMintAddress: PublicKey;
  walletAddress: Signer;
  tokenProgram?: PublicKey;
};

// Instruction.
export function recoverNested(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: RecoverNestedInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'splAssociatedTokenAccount',
    'TokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
  );

  // Nested Associated Account Address.
  keys.push({
    pubkey: input.nestedAssociatedAccountAddress,
    isSigner: false,
    isWritable: true,
  });

  // Nested Token Mint Address.
  keys.push({
    pubkey: input.nestedTokenMintAddress,
    isSigner: false,
    isWritable: false,
  });

  // Destination Associated Account Address.
  keys.push({
    pubkey: input.destinationAssociatedAccountAddress,
    isSigner: false,
    isWritable: true,
  });

  // Owner Associated Account Address.
  keys.push({
    pubkey: input.ownerAssociatedAccountAddress,
    isSigner: false,
    isWritable: false,
  });

  // Owner Token Mint Address.
  keys.push({
    pubkey: input.ownerTokenMintAddress,
    isSigner: false,
    isWritable: false,
  });

  // Wallet Address.
  signers.push(input.walletAddress);
  keys.push({
    pubkey: input.walletAddress.publicKey,
    isSigner: true,
    isWritable: true,
  });

  // Token Program.
  keys.push({
    pubkey:
      input.tokenProgram ??
      getProgramAddressWithFallback(
        context,
        'splToken',
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Data.
  const data = new Uint8Array();

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
