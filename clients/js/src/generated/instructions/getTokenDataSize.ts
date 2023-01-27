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
export type GetTokenDataSizeInstructionAccounts = {
  mint: PublicKey;
};

// Arguments.
export type GetTokenDataSizeInstructionData = { discriminator: number };

export type GetTokenDataSizeInstructionArgs = {};

export function getGetTokenDataSizeInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  GetTokenDataSizeInstructionArgs,
  GetTokenDataSizeInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    GetTokenDataSizeInstructionArgs,
    GetTokenDataSizeInstructionData,
    GetTokenDataSizeInstructionData
  >(
    s.struct<GetTokenDataSizeInstructionData>(
      [['discriminator', s.u8]],
      'GetTokenDataSizeInstructionArgs'
    ),
    (value) =>
      ({ ...value, discriminator: 21 } as GetTokenDataSizeInstructionData)
  ) as Serializer<
    GetTokenDataSizeInstructionArgs,
    GetTokenDataSizeInstructionData
  >;
}

// Instruction.
export function getTokenDataSize(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: GetTokenDataSizeInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('splToken').publicKey;

  // Resolved accounts.
  const mintAccount = input.mint;

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // Data.
  const data = getGetTokenDataSizeInstructionDataSerializer(context).serialize(
    {}
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
