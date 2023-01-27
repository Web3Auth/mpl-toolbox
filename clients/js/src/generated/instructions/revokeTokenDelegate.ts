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
export type RevokeTokenDelegateInstructionAccounts = {
  source: PublicKey;
  owner: Signer;
};

// Arguments.
export type RevokeTokenDelegateInstructionData = { discriminator: number };

export type RevokeTokenDelegateInstructionArgs = {};

export function getRevokeTokenDelegateInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  RevokeTokenDelegateInstructionArgs,
  RevokeTokenDelegateInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    RevokeTokenDelegateInstructionArgs,
    RevokeTokenDelegateInstructionData,
    RevokeTokenDelegateInstructionData
  >(
    s.struct<RevokeTokenDelegateInstructionData>(
      [['discriminator', s.u8]],
      'RevokeTokenDelegateInstructionArgs'
    ),
    (value) =>
      ({ ...value, discriminator: 5 } as RevokeTokenDelegateInstructionData)
  ) as Serializer<
    RevokeTokenDelegateInstructionArgs,
    RevokeTokenDelegateInstructionData
  >;
}

// Instruction.
export function revokeTokenDelegate(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: RevokeTokenDelegateInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('splToken').publicKey;

  // Resolved accounts.
  const sourceAccount = input.source;
  const ownerAccount = input.owner;

  // Source.
  keys.push({
    pubkey: sourceAccount,
    isSigner: false,
    isWritable: isWritable(sourceAccount, true),
  });

  // Owner.
  signers.push(ownerAccount);
  keys.push({
    pubkey: ownerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(ownerAccount, false),
  });

  // Data.
  const data = getRevokeTokenDelegateInstructionDataSerializer(
    context
  ).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
