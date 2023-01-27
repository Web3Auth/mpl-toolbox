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
  Serializer,
  Signer,
  WrappedInstruction,
  checkForIsWritableOverride as isWritable,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type FreezeTokenInstructionAccounts = {
  account: PublicKey;
  mint: PublicKey;
  owner: Signer;
};

// Arguments.
export type FreezeTokenInstructionData = { discriminator: number };

export type FreezeTokenInstructionArgs = {};

export function getFreezeTokenInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<FreezeTokenInstructionArgs, FreezeTokenInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    FreezeTokenInstructionArgs,
    FreezeTokenInstructionData,
    FreezeTokenInstructionData
  >(
    s.struct<FreezeTokenInstructionData>(
      [['discriminator', s.u8]],
      'FreezeTokenInstructionArgs'
    ),
    (value) => ({ ...value, discriminator: 10 } as FreezeTokenInstructionData)
  ) as Serializer<FreezeTokenInstructionArgs, FreezeTokenInstructionData>;
}

// Instruction.
export function freezeToken(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: FreezeTokenInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('splToken').publicKey;

  // Resolved accounts.
  const accountAccount = input.account;
  const mintAccount = input.mint;
  const ownerAccount = input.owner;

  // Account.
  keys.push({
    pubkey: accountAccount,
    isSigner: false,
    isWritable: isWritable(accountAccount, true),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // Owner.
  signers.push(ownerAccount);
  keys.push({
    pubkey: ownerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(ownerAccount, false),
  });

  // Data.
  const data = getFreezeTokenInstructionDataSerializer(context).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
