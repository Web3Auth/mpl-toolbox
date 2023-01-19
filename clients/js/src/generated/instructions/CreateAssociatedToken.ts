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
  checkForIsWritableOverride as isWritable,
  getProgramAddressWithFallback,
} from '@lorisleiva/js-core';

// Accounts.
export type CreateAssociatedTokenInstructionAccounts = {
  payer?: Signer;
  ata: PublicKey;
  owner: PublicKey;
  mint: PublicKey;
  systemProgram?: PublicKey;
  tokenProgram?: PublicKey;
};

// Instruction.
export function createAssociatedToken(
  context: {
    serializer: Context['serializer'];
    payer: Context['payer'];
    programs?: Context['programs'];
  },
  input: CreateAssociatedTokenInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'splAssociatedTokenAccount',
    'TokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
  );

  // Resolved accounts.
  const payerAccount = input.payer ?? context.payer;
  const ataAccount = input.ata;
  const ownerAccount = input.owner;
  const mintAccount = input.mint;
  const systemProgramAccount = input.systemProgram ?? {
    ...getProgramAddressWithFallback(
      context,
      'splSystem',
      '11111111111111111111111111111111'
    ),
    isWritable: false,
  };
  const tokenProgramAccount = input.tokenProgram ?? {
    ...getProgramAddressWithFallback(
      context,
      'splToken',
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
    ),
    isWritable: false,
  };

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, true),
  });

  // Ata.
  keys.push({
    pubkey: ataAccount,
    isSigner: false,
    isWritable: isWritable(ataAccount, true),
  });

  // Owner.
  keys.push({
    pubkey: ownerAccount,
    isSigner: false,
    isWritable: isWritable(ownerAccount, false),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Token Program.
  keys.push({
    pubkey: tokenProgramAccount,
    isSigner: false,
    isWritable: isWritable(tokenProgramAccount, false),
  });

  // Data.
  const data = new Uint8Array();

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
