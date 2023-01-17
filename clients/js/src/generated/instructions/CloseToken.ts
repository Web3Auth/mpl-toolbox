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
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type CloseTokenInstructionAccounts = {
  account: PublicKey;
  destination: PublicKey;
  owner: Signer;
};

// Arguments.
export type CloseTokenInstructionData = { discriminator: number };

export type CloseTokenInstructionArgs = {};

export function getCloseTokenInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<CloseTokenInstructionArgs, CloseTokenInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    CloseTokenInstructionArgs,
    CloseTokenInstructionData,
    CloseTokenInstructionData
  >(
    s.struct<CloseTokenInstructionData>(
      [['discriminator', s.u8]],
      'CloseAccountInstructionArgs'
    ),
    (value) => ({ discriminator: 9, ...value } as CloseTokenInstructionData)
  ) as Serializer<CloseTokenInstructionArgs, CloseTokenInstructionData>;
}

// Instruction.
export function closeToken(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: CloseTokenInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'splToken',
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
  );

  // Account.
  keys.push({ pubkey: input.account, isSigner: false, isWritable: true });

  // Destination.
  keys.push({ pubkey: input.destination, isSigner: false, isWritable: true });

  // Owner.
  signers.push(input.owner);
  keys.push({
    pubkey: input.owner.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Data.
  const data = getCloseTokenInstructionDataSerializer(context).serialize({});

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
