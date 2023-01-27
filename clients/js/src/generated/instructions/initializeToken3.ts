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
export type InitializeToken3InstructionAccounts = {
  account: PublicKey;
  mint: PublicKey;
};

// Arguments.
export type InitializeToken3InstructionData = {
  discriminator: number;
  owner: PublicKey;
};

export type InitializeToken3InstructionArgs = { owner: PublicKey };

export function getInitializeToken3InstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  InitializeToken3InstructionArgs,
  InitializeToken3InstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    InitializeToken3InstructionArgs,
    InitializeToken3InstructionData,
    InitializeToken3InstructionData
  >(
    s.struct<InitializeToken3InstructionData>(
      [
        ['discriminator', s.u8],
        ['owner', s.publicKey],
      ],
      'InitializeToken3InstructionArgs'
    ),
    (value) =>
      ({ ...value, discriminator: 18 } as InitializeToken3InstructionData)
  ) as Serializer<
    InitializeToken3InstructionArgs,
    InitializeToken3InstructionData
  >;
}

// Instruction.
export function initializeToken3(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: InitializeToken3InstructionAccounts & InitializeToken3InstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('splToken').publicKey;

  // Resolved accounts.
  const accountAccount = input.account;
  const mintAccount = input.mint;

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

  // Data.
  const data =
    getInitializeToken3InstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
