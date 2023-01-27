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
export type SyncNativeInstructionAccounts = {
  account: PublicKey;
};

// Arguments.
export type SyncNativeInstructionData = { discriminator: number };

export type SyncNativeInstructionArgs = {};

export function getSyncNativeInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<SyncNativeInstructionArgs, SyncNativeInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    SyncNativeInstructionArgs,
    SyncNativeInstructionData,
    SyncNativeInstructionData
  >(
    s.struct<SyncNativeInstructionData>(
      [['discriminator', s.u8]],
      'SyncNativeInstructionArgs'
    ),
    (value) => ({ ...value, discriminator: 17 } as SyncNativeInstructionData)
  ) as Serializer<SyncNativeInstructionArgs, SyncNativeInstructionData>;
}

// Instruction.
export function syncNative(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: SyncNativeInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('splToken').publicKey;

  // Resolved accounts.
  const accountAccount = input.account;

  // Account.
  keys.push({
    pubkey: accountAccount,
    isSigner: false,
    isWritable: isWritable(accountAccount, true),
  });

  // Data.
  const data = getSyncNativeInstructionDataSerializer(context).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
